import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3030Component } from './test-component3030.component';

describe('TestComponent3030Component', () => {
  let component: TestComponent3030Component;
  let fixture: ComponentFixture<TestComponent3030Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3030Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3030Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
