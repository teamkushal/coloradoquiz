import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1518Component } from './test-component1518.component';

describe('TestComponent1518Component', () => {
  let component: TestComponent1518Component;
  let fixture: ComponentFixture<TestComponent1518Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1518Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1518Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
