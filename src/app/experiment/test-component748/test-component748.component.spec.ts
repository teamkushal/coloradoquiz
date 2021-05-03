import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent748Component } from './test-component748.component';

describe('TestComponent748Component', () => {
  let component: TestComponent748Component;
  let fixture: ComponentFixture<TestComponent748Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent748Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent748Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
