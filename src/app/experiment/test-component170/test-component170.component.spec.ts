import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent170Component } from './test-component170.component';

describe('TestComponent170Component', () => {
  let component: TestComponent170Component;
  let fixture: ComponentFixture<TestComponent170Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent170Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
