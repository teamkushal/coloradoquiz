import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent959Component } from './test-component959.component';

describe('TestComponent959Component', () => {
  let component: TestComponent959Component;
  let fixture: ComponentFixture<TestComponent959Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent959Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent959Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
