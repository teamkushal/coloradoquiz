import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1984Component } from './test-component1984.component';

describe('TestComponent1984Component', () => {
  let component: TestComponent1984Component;
  let fixture: ComponentFixture<TestComponent1984Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1984Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1984Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
