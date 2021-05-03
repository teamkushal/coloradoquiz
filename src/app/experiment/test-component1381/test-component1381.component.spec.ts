import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1381Component } from './test-component1381.component';

describe('TestComponent1381Component', () => {
  let component: TestComponent1381Component;
  let fixture: ComponentFixture<TestComponent1381Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1381Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1381Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
