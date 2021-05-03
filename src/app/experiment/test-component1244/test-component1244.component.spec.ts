import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1244Component } from './test-component1244.component';

describe('TestComponent1244Component', () => {
  let component: TestComponent1244Component;
  let fixture: ComponentFixture<TestComponent1244Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1244Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
