import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent950Component } from './test-component950.component';

describe('TestComponent950Component', () => {
  let component: TestComponent950Component;
  let fixture: ComponentFixture<TestComponent950Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent950Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent950Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
