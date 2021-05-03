import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1067Component } from './test-component1067.component';

describe('TestComponent1067Component', () => {
  let component: TestComponent1067Component;
  let fixture: ComponentFixture<TestComponent1067Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1067Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1067Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
