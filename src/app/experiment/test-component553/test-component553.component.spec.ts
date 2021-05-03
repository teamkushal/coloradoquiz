import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent553Component } from './test-component553.component';

describe('TestComponent553Component', () => {
  let component: TestComponent553Component;
  let fixture: ComponentFixture<TestComponent553Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent553Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent553Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
