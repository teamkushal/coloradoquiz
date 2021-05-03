import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent15Component } from './test-component15.component';

describe('TestComponent15Component', () => {
  let component: TestComponent15Component;
  let fixture: ComponentFixture<TestComponent15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
