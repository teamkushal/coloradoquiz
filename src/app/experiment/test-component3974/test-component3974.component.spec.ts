import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3974Component } from './test-component3974.component';

describe('TestComponent3974Component', () => {
  let component: TestComponent3974Component;
  let fixture: ComponentFixture<TestComponent3974Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3974Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3974Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
