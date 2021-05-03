import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent908Component } from './test-component908.component';

describe('TestComponent908Component', () => {
  let component: TestComponent908Component;
  let fixture: ComponentFixture<TestComponent908Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent908Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent908Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
