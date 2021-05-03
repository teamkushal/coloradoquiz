import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent811Component } from './test-component811.component';

describe('TestComponent811Component', () => {
  let component: TestComponent811Component;
  let fixture: ComponentFixture<TestComponent811Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent811Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent811Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
