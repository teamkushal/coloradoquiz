import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent490Component } from './test-component490.component';

describe('TestComponent490Component', () => {
  let component: TestComponent490Component;
  let fixture: ComponentFixture<TestComponent490Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent490Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent490Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
