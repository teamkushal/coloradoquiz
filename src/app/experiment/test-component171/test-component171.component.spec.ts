import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent171Component } from './test-component171.component';

describe('TestComponent171Component', () => {
  let component: TestComponent171Component;
  let fixture: ComponentFixture<TestComponent171Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent171Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
