import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3683Component } from './test-component3683.component';

describe('TestComponent3683Component', () => {
  let component: TestComponent3683Component;
  let fixture: ComponentFixture<TestComponent3683Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3683Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3683Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
