import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent864Component } from './test-component864.component';

describe('TestComponent864Component', () => {
  let component: TestComponent864Component;
  let fixture: ComponentFixture<TestComponent864Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent864Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent864Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
