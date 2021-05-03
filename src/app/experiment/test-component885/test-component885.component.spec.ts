import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent885Component } from './test-component885.component';

describe('TestComponent885Component', () => {
  let component: TestComponent885Component;
  let fixture: ComponentFixture<TestComponent885Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent885Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent885Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
