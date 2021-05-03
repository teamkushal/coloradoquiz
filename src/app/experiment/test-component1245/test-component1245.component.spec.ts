import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1245Component } from './test-component1245.component';

describe('TestComponent1245Component', () => {
  let component: TestComponent1245Component;
  let fixture: ComponentFixture<TestComponent1245Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1245Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
