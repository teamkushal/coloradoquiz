import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2375Component } from './test-component2375.component';

describe('TestComponent2375Component', () => {
  let component: TestComponent2375Component;
  let fixture: ComponentFixture<TestComponent2375Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2375Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2375Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
