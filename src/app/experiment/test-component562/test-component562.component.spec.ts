import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent562Component } from './test-component562.component';

describe('TestComponent562Component', () => {
  let component: TestComponent562Component;
  let fixture: ComponentFixture<TestComponent562Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent562Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent562Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
