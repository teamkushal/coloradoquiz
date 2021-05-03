import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2050Component } from './test-component2050.component';

describe('TestComponent2050Component', () => {
  let component: TestComponent2050Component;
  let fixture: ComponentFixture<TestComponent2050Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2050Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2050Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
