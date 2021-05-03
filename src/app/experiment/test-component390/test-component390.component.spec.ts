import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent390Component } from './test-component390.component';

describe('TestComponent390Component', () => {
  let component: TestComponent390Component;
  let fixture: ComponentFixture<TestComponent390Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent390Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent390Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
