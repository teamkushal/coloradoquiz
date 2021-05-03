import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent512Component } from './test-component512.component';

describe('TestComponent512Component', () => {
  let component: TestComponent512Component;
  let fixture: ComponentFixture<TestComponent512Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent512Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent512Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
