import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent325Component } from './test-component325.component';

describe('TestComponent325Component', () => {
  let component: TestComponent325Component;
  let fixture: ComponentFixture<TestComponent325Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent325Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent325Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
