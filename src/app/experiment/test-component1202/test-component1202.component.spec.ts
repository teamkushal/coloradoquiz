import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1202Component } from './test-component1202.component';

describe('TestComponent1202Component', () => {
  let component: TestComponent1202Component;
  let fixture: ComponentFixture<TestComponent1202Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1202Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
