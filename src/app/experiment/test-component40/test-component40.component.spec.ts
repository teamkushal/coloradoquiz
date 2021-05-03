import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent40Component } from './test-component40.component';

describe('TestComponent40Component', () => {
  let component: TestComponent40Component;
  let fixture: ComponentFixture<TestComponent40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent40Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
