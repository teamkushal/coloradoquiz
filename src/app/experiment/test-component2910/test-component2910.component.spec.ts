import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2910Component } from './test-component2910.component';

describe('TestComponent2910Component', () => {
  let component: TestComponent2910Component;
  let fixture: ComponentFixture<TestComponent2910Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2910Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2910Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
