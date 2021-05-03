import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent220Component } from './test-component220.component';

describe('TestComponent220Component', () => {
  let component: TestComponent220Component;
  let fixture: ComponentFixture<TestComponent220Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent220Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
