import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1259Component } from './test-component1259.component';

describe('TestComponent1259Component', () => {
  let component: TestComponent1259Component;
  let fixture: ComponentFixture<TestComponent1259Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1259Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1259Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
