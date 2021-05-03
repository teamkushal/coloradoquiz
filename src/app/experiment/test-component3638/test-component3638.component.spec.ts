import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3638Component } from './test-component3638.component';

describe('TestComponent3638Component', () => {
  let component: TestComponent3638Component;
  let fixture: ComponentFixture<TestComponent3638Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3638Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3638Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
