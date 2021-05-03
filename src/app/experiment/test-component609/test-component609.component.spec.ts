import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent609Component } from './test-component609.component';

describe('TestComponent609Component', () => {
  let component: TestComponent609Component;
  let fixture: ComponentFixture<TestComponent609Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent609Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent609Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
