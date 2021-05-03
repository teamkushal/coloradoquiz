import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2506Component } from './test-component2506.component';

describe('TestComponent2506Component', () => {
  let component: TestComponent2506Component;
  let fixture: ComponentFixture<TestComponent2506Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2506Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2506Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
