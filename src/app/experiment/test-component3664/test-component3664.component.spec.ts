import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3664Component } from './test-component3664.component';

describe('TestComponent3664Component', () => {
  let component: TestComponent3664Component;
  let fixture: ComponentFixture<TestComponent3664Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3664Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3664Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
