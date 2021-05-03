import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3380Component } from './test-component3380.component';

describe('TestComponent3380Component', () => {
  let component: TestComponent3380Component;
  let fixture: ComponentFixture<TestComponent3380Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3380Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3380Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
