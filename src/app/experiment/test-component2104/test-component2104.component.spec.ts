import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2104Component } from './test-component2104.component';

describe('TestComponent2104Component', () => {
  let component: TestComponent2104Component;
  let fixture: ComponentFixture<TestComponent2104Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2104Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
