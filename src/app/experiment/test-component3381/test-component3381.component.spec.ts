import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3381Component } from './test-component3381.component';

describe('TestComponent3381Component', () => {
  let component: TestComponent3381Component;
  let fixture: ComponentFixture<TestComponent3381Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3381Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3381Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
