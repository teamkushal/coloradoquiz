import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent910Component } from './test-component910.component';

describe('TestComponent910Component', () => {
  let component: TestComponent910Component;
  let fixture: ComponentFixture<TestComponent910Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent910Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent910Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
