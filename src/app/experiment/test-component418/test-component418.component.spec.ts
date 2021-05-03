import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent418Component } from './test-component418.component';

describe('TestComponent418Component', () => {
  let component: TestComponent418Component;
  let fixture: ComponentFixture<TestComponent418Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent418Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent418Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
