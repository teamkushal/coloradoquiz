import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent875Component } from './test-component875.component';

describe('TestComponent875Component', () => {
  let component: TestComponent875Component;
  let fixture: ComponentFixture<TestComponent875Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent875Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent875Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
