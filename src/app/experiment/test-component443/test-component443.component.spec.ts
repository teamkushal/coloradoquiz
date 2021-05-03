import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent443Component } from './test-component443.component';

describe('TestComponent443Component', () => {
  let component: TestComponent443Component;
  let fixture: ComponentFixture<TestComponent443Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent443Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent443Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
