import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent567Component } from './test-component567.component';

describe('TestComponent567Component', () => {
  let component: TestComponent567Component;
  let fixture: ComponentFixture<TestComponent567Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent567Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent567Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
