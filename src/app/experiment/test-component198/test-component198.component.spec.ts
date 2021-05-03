import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent198Component } from './test-component198.component';

describe('TestComponent198Component', () => {
  let component: TestComponent198Component;
  let fixture: ComponentFixture<TestComponent198Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent198Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
