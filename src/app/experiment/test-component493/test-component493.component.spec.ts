import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent493Component } from './test-component493.component';

describe('TestComponent493Component', () => {
  let component: TestComponent493Component;
  let fixture: ComponentFixture<TestComponent493Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent493Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent493Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
