import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3075Component } from './test-component3075.component';

describe('TestComponent3075Component', () => {
  let component: TestComponent3075Component;
  let fixture: ComponentFixture<TestComponent3075Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3075Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3075Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
