import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3837Component } from './test-component3837.component';

describe('TestComponent3837Component', () => {
  let component: TestComponent3837Component;
  let fixture: ComponentFixture<TestComponent3837Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3837Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3837Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
