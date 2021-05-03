import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent938Component } from './test-component938.component';

describe('TestComponent938Component', () => {
  let component: TestComponent938Component;
  let fixture: ComponentFixture<TestComponent938Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent938Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent938Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
