import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent139Component } from './test-component139.component';

describe('TestComponent139Component', () => {
  let component: TestComponent139Component;
  let fixture: ComponentFixture<TestComponent139Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent139Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
