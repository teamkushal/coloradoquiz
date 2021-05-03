import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent6Component } from './test-component6.component';

describe('TestComponent6Component', () => {
  let component: TestComponent6Component;
  let fixture: ComponentFixture<TestComponent6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
