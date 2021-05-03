import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3443Component } from './test-component3443.component';

describe('TestComponent3443Component', () => {
  let component: TestComponent3443Component;
  let fixture: ComponentFixture<TestComponent3443Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3443Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3443Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
