import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent364Component } from './test-component364.component';

describe('TestComponent364Component', () => {
  let component: TestComponent364Component;
  let fixture: ComponentFixture<TestComponent364Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent364Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
